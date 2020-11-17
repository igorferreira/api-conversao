# Api de conversao de medidas de temperatura

 Copiei esse projeto do kubeDev, fiz as alterações abaixo:

 - incluido endpoint health
 - incluido exibição de ip
 - incluido arquivos para deploy no kubernetes

## Metodos

 - Convertendo de fahrenheit para celsius

```shell
   curl localhost:8080/fahrenheit/80/celsius
   {"celsius":"26.67","maquina":"isfconsultpc"}
```

 - Convertendo de celsius para fahrenheit

```shell
   curl localhost:8080/celsius/25/fahrenheit
   {"fahrenheit":"77.00","maquina":"isfconsultpc"}
```