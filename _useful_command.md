Setup TFTP Server, and use this command to upload current folder file, (no recursive)
```
for i in *;do tftp -l $i -p 192.168.1.2 69; done
```