FROM harbor.poc.cnpc/library/alpine-oraclejdk8:slim
VOLUME /tmp
RUN mkdir /app
ADD webssh-0.0.1-SNAPSHOT.jar /app/app.jar
RUN bash -c 'touch /app/app.jar'
WORKDIR /app
RUN bash -c 'ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime'
RUN bash -c 'echo "Asia/Shanghai" >> /etc/timezone'
ENV JAVA_OPTS="-Duser.timezone=GMT+08"
EXPOSE 8080
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app/app.jar" ]