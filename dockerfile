# Use uma imagem base com um servidor web leve
FROM nginx:latest

# Copie o conteúdo do site para o diretório padrão do Nginx
COPY ./ /usr/share/nginx/html

# Exponha a porta que o Nginx irá usar
EXPOSE 80

# Comando para rodar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
