# DFP-34G-2C2
Hacking & Research for ONU SFP Stick

[thankyou](https://forum.lowyat.net/index.php?showuser=1793) lend me this ONT Stick for R&D, for the community to know more what inside.

This project just education, setup Enterprise Grade equipment at Home with minimal footprint. Follow the forum discussion at [Ditch ONU, use GPON SFP on Business Grade Router](https://forum.lowyat.net/topic/4925452)

In this repo, I managed extract some readable file via TFTP, so anyone can hack, reverse engineering for better.

# Problem
This ONT Stick only works when OLT provision Internet on LAN 1 port (`eth0`) and making passthrough full bridge with `nbif0`.

If your ISP Provision other than `LAN 1` port, it wont work, this need to hack to making it work, or override OLT provision.

# Hardware
## SoC
```
Processor       : ARMv7 Processor rev 1 (v7l)
BogoMIPS        : 1196.03
Features        : swp half fastmult edsp 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x4
CPU part        : 0xc09
CPU revision    : 1

Hardware        : ZX279125
Revision        : 0020
Serial          : 0000000000000000
```

## RAM
```
MemTotal:          17756 kB
MemFree:            1224 kB
Buffers:               0 kB
Cached:             7960 kB
SwapCached:            0 kB
Active:             6176 kB
Inactive:           5028 kB
Active(anon):       1444 kB
Inactive(anon):     2032 kB
Active(file):       4732 kB
Inactive(file):     2996 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Dirty:                 0 kB
Writeback:             0 kB
AnonPages:          3284 kB
Mapped:             3252 kB
Shmem:               232 kB
Slab:               2048 kB
SReclaimable:        280 kB
SUnreclaim:         1768 kB
KernelStack:         504 kB
PageTables:          268 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:        8876 kB
Committed_AS:      13808 kB
VmallocTotal:     745472 kB
VmallocUsed:         436 kB
VmallocChunk:     740304 kB
```

# Files
## WebGUI
1. WebGUI files can be located at `/home/httpd`
2. `*.gch` files just a ASP script's

## BusyBox
`bin` and `sbin` file with `267 332` bytes size, it was symlink to `busybox` binary, TFTP dosent read symlink, it simply read normal binary
