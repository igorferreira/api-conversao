dockerbuild:
	docker build -t igorferreira/api-conversao:latest .

dockerpush:
	docker push igorferreira/api-conversao:latest
	
deploy-service:
	kubectl apply -f ./k8s/service.yml
	
deploy:
	kubectl apply -f ./k8s/deployment.yml