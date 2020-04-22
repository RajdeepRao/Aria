#!/bin/bash
app="aria"
docker stop ${app}
docker rm ${app}
docker build -t ${app} .
docker run -p 5000:5000 \
  --name=${app} \
  -v $PWD:/aria ${app}
