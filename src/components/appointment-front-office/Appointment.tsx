'use client'
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentApi, visitorApi } from "@/provider";
import { TextField } from '@mui/material';
import { DateTimeField } from '@mui/x-date-pickers';
import CustomButton from "../button/Button";


const schema = z.object({
    name: z.string(),
    datetime: z.string().datetime(),
    email: z.string().email(),
    message: z.string().min(1,'required value')
}) 

type appointmentSchema = z.infer<typeof schema>


export default function AppointmentForm(props: {carId: number | undefined}) {

    const {control,register,handleSubmit} = useForm<appointmentSchema>({
        resolver: zodResolver(schema)
    })
    const handleDataToSend: SubmitHandler<appointmentSchema> = async (data) =>{
        const createVisitor = await visitorApi().createVisitor({
            name: data.name,
            email: data.email
        }).then( res => res.data)

        const createAppointment = await appointmentApi().createAppointment({
            name: data.name,
            datetime: data.datetime,
            status: "pending",
            message: data.message,
            carId: props.carId,
            visitorId: createVisitor.id
        })
        return createAppointment.status
    }

    return(
        <form onSubmit={handleSubmit(handleDataToSend)}>
          <div className="pt-5 flex flex-col gap-4 relative">
            {props.carId ? (
            <input
                type="text"
                name="car_id"
                value={props.carId}
                defaultValue={props.carId}
                hidden
            />
            ) : null}
            <TextField
                {...register('name', { required: 'required value' })}
                
            />
            <TextField  {...register('email')} />
            <Controller
            name="datetime"
            control={control}
            render={({ field }) => (
                <DateTimeField
                    format="yyyy/MM/dd hh:mm"
                    {...field}
                    onChange={(newValue) => {
                    if (newValue!== null) {
                        field.onChange(newValue); 
                    }
                    }}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={undefined} 
                />
            )}
      />
            <TextField
            multiline
            {...register('message', { required: 'required value' })}
            inputProps={{
                sx: { height: '14rem', maxHeight: '14rem' },
                style: { height: '14rem', maxHeight: '14rem' },
            }}
            />
            <CustomButton type="submit" style="btn-primary w-full" >submit</CustomButton>
        </div>
        </form>
    );

}


