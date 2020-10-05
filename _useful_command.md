Setup TFTP Server, and use this command to upload current folder file, (no recursive)
```
for i in *;do tftp -l $i -p 192.168.1.2 69; done
```

Get device information
```
cat /proc/cpuinfo
cat /proc/mtd
cat /proc/devices
cat /proc/cmdline
cat /proc/version
cat /etc/version
ls /proc
lsmod
cat /proc/meminfo
cat /proc/mounts
ifconfig

```