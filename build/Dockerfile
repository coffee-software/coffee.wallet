FROM debian:sid AS coffee-build
RUN apt-get update
# Install required apt packages
RUN apt-get install --yes nodejs openjdk-8-jdk npm curl unzip
# Install node required modules
RUN npm install -g typescript@4.7.4 browserify@17.0.0 cordova@10.0.0 uglify-js@3.16.3

ENV ANDROID_SDK_ROOT /usr/local/android-sdk-linux
ENV GRADLE_USER_HOME /opt/gradle
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
ENV PATH $PATH:$ANDROID_SDK_ROOT/bin:$GRADLE_USER_HOME/bin

# Install Gradle
RUN curl -so /tmp/gradle-6.8.2-bin.zip https://downloads.gradle-dn.com/distributions/gradle-6.8.2-bin.zip && \
    unzip -qd /opt /tmp/gradle-6.8.2-bin.zip && \
    ln -s /opt/gradle-6.8.2 $GRADLE_USER_HOME

# Install Android SDK
RUN curl -so /tmp/commandlinetools-linux-6858069_latest.zip https://dl.google.com/android/repository/commandlinetools-linux-6858069_latest.zip && \
    mkdir -p $ANDROID_SDK_ROOT/ && \
    unzip -qd $ANDROID_SDK_ROOT/ /tmp/commandlinetools-linux-6858069_latest.zip && \
    mv $ANDROID_SDK_ROOT/cmdline-tools/* $ANDROID_SDK_ROOT/ && \
    yes | sdkmanager --sdk_root=$ANDROID_SDK_ROOT "build-tools;30.0.3" "platforms;android-29";

COPY plugins /coffee/plugins
COPY res /coffee/res
COPY src /coffee/src
COPY test /coffee/test
COPY www /coffee/www
COPY node_modules /coffee/node_modules
COPY config.xml /coffee/config.xml
COPY package.json /coffee/package.json
COPY tsconfig.json /coffee/tsconfig.json
COPY browserify.sh /coffee/browserify.sh

WORKDIR /coffee
RUN npm run build
RUN ./browserify.sh full
RUN cordova platform add android
RUN cordova build android --release --

# Export apk to use as output
FROM scratch AS export-stage
COPY --from=coffee-build /coffee/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk /
