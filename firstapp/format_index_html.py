import sys
import fileinput

file = 'dist/index.html'

with open(file, "r+") as f:
    s = f.read()
    f.seek(0)
    f.write("{% load staticfiles %}\n" + s)

#starting tag
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('css/', "{% static 'css/"))   
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('js/', "{% static 'js/"))
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('img/', "{% static 'img/"))



#endtag
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('.css', ".css' %}"))
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('.js', ".js' %}"))
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('.png', ".png' %}"))
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('.jpeg', ".jpeg' %}"))
for i, line in enumerate(fileinput.input(file, inplace=1)):
    sys.stdout.write(line.replace('.svg', ".svg' %}"))


