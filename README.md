[docker]: https://www.docker.com/
[dockercompose]: https://docs.docker.com/compose/
[protoc]: https://github.com/google/protobuf/releases
[swagger]: https://swagger.io/

## Description

[Nest](https://github.com/nestjs/nest) Microservice gRPC.

## Install protoc

Use Protobufs as part of our toolchain so you need to [grab a release][protoc] 
from upstream before you can create a project. 
On macOS you can do this with just `brew install protobuf`, if you'd like.
On Linux try to do the following:
```bash
$ cd ./~
$ export PROTOBUF_VERSION=3.11.4
$ curl -sOL "https://github.com/google/protobuf/releases/download/v${PROTOBUF_VERSION}/protoc-${PROTOBUF_VERSION}-linux-x86_64.zip" && \
$ unzip protoc-*.zip              && \
$ mv bin/protoc /usr/local/bin    && \
$ mv include/* /usr/local/include && \
$ rm -f protoc-*.zip
```
## Documentation & Guides
[API Gateway](https://duy-lee.vercel.app/post/xay-dung-api-gateway-microservice-voi-nestjs-va-grpc-part-12/)

[Services](https://duy-lee.vercel.app/post/xay-dung-cac-microservice-authentication-order-product-voi-nestjs-va-grpc-part-22/)
