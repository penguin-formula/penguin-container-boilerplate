Kubernetes

```sh
$ minikube start
$ kubectl create -f mongodb-statefulset.yaml
$ kubectl create -f mongodb-volume-claim.yaml
$ kubectl create -f mongodb-service.yaml
$ kubectl create -f penguin-api-deployment.yaml
$ kubectl create -f penguin-api-service.yaml
$ kubectl create -f penguin-frontend-deployment.yaml
$ kubectl create -f penguin-frontend-service.yaml
```

```sh
$ minikube service penguin-frontend-service --url
```

Docker Compose


```sh
$ docker-compose build
$ docker-compose up
```