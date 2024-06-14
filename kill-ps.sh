echo ${PSWD} | sudo -S docker ps --format "{{.ID}}\t{{.Names}}" | awk '{print $1}' | xargs sudo docker kill
