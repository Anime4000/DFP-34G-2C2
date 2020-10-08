https://www.txrjy.com/thread-938218-1-1.html
```
FTTH注册失败时可以用这个命令抓包分析数据
ifconfig镜像方法（适用于所有GPON自研产品）
1）显示所有已经存在的接口
ifconfig
2）做镜像，将WAN连接镜像到FE口
ifconfig mirror add nbif0 eth0      //增加镜像，eth0-3分别对应ONU的网络1-网络4
ifconfig mirror dele nbif0         //删除镜像
ifconfig mirror add eth3 eth0      //将网络4的包镜像到网络1
v3版本推荐镜像命令
镜像全部数据包的方法：
ethdriver_test -setmiror [direction:0->rx,1->tx,2->rx/tx] [desport] [action：0->disable,1->enable]
例如：
ethdriver_test -setmiror 2 0 1       //镜像wan口的报文包到eth0口
v5版本镜像命令
ifconfig mirror add pon0 eth0  //镜像wan口的报文包到eth0口
有些时候会要求镜像二层数据到LAN口，可使用下边命令：
双向数据镜像至LAN1口:
switchtst -spmirr wan 1 2 eth0
```

https://forum.mikrotik.com/viewtopic.php?t=116364&start=150#p755992
```
sfp partition mapping can be obtained by command.

root@SFP:/# cat proc/mtd
dev: size erasesize name
mtd0: 00040000 00010000 "uboot"
mtd1: 00080000 00010000 "uboot_env"
mtd2: 00740000 00010000 "linux"
mtd3: 0061eedc 00010000 "rootfs"
mtd4: 00370000 00010000 "rootfs_data"
mtd5: 00800000 00010000 "image1"

to transfer mtd partition search for and use live linux distribution. e.g. Ubuntu
On the linux computer setup a fixed IP (same subnet as sfp stick) e.g. 192.168.1.12. Open terminal.

root@ubuntu:/# nc -l -p 4444 > mtd1.bin
-l listen
-p port number

now on the sfp stick send the mtd to the linux pc

root@SFP:/# cat /dev/mtd1 | nc 192.168.1.12 4444
```