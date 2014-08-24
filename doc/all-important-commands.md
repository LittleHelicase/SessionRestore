# Restore commands

This file includes all important commands to store window positions and
to restore those. There also should be a link to the file where the command
is implemented in (if it is already implemented).

## Window positions

This sections contains all information about getting the window positions

### X11

To get all window positions run

```
xwininfo -tree -root
```

this ouputs something like this

```
xwininfo: Window id: 0xe1 (the root window) (has no name)

  Root window id: 0xe1 (the root window) (has no name)
  Parent window id: 0x0 (none)
     8 children:
     0x400097 (has no name): ()  483x446+0+0  +0+0
        3 children:
        0x400099 (has no name): ()  15x15+468+431  +468+431
        0x400098 (has no name): ()  56x16+8+2  +8+2
        0x60000d "New document 1 - Inkscape": ("inkscape-bin" "Inkscape-bin")  483x424+0+22  +0+22
           1 child:
           0x60000e (has no name): ()  1x1+-1+-1  +-1+21
     0x60004b "inkscape-bin": ()  30x39+0+0  +0+0
        1 child:
        0x60004c (has no name): ()  1x1+-1+-1  +-1+-1
     0x600049 "inkscape-bin": ()  30x39+0+0  +0+0
        1 child:
        0x60004a (has no name): ()  1x1+-1+-1  +-1+-1
     0x60002f "inkscape-bin": ()  34x39+0+0  +0+0
        1 child:
        0x600030 (has no name): ()  1x1+-1+-1  +-1+-1
     0x60002a "inkscape-bin": ()  413x36+0+0  +0+0
        1 child:
        0x60002b (has no name): ()  1x1+-1+-1  +-1+-1
     0x600001 "inkscape-bin": ("inkscape-bin" "Inkscape-bin")  10x10+10+10  +10+10
        1 child:
        0x600002 (has no name): ()  1x1+-1+-1  +9+9
     0x800001 (has no name): ()  1x1+0+0  +0+0
     0x400001 (has no name): ()  1x1+0+0  +0+0
```

With the size an position of all windows

## MacOS X

It seems to be more difficult under mac. But [this](http://stackoverflow.com/questions/614185/window-move-and-resize-apis-in-os-x)
Stack Overflow article show a way to get all window positions. It seems
necessary to activate the Accessibility API for this. Or probably
[slate](https://github.com/jigish/slate) could be an alternative under Mac. It
seems to implement all necessary features. But it seems to be a huge dependency.
