# 다양한 언어 사용가능
From golang:1.15
WORKDIR /go/src/hello

COPY . .

RUN go get -d -v ./...

RUN go install -v ./...

CMD ['hello']