#! /bin/bash
cd src/logos/logos/

rm -f ../../LogoPaths.js

ls | grep svg | awk '{ printf "import %s from\n", substr($0,1,length($0)-4)}' >> ../../LogoPaths.js
echo "export {" >> ../../LogoPaths.js
ls | grep svg | awk '{ printf "%s,\n", substr($0,1,length($0)-4)}' >> ../../LogoPaths.js

#Removes Dashes
sed -i 's/-//g' ../../LogoPaths.js
#Fixes 6s
sed -i 's/6/six/g' ../../LogoPaths.js
#Fixes 500s
sed -i 's/500/fiveHundred/g' ../../LogoPaths.js
#Fixes 100s
sed -i 's/100/oneHundred/g' ../../LogoPaths.js
#Fixes C++
sed -i 's/++/plusplus/g' ../../LogoPaths.js
#Fixes Lucene.Net
sed -i 's/lucene.net/lucenenet/g' ../../LogoPaths.js
#Fixes Message.io
sed -i 's/message.io/messageio/g' ../../LogoPaths.js
#Fixes Socket.io
sed -i 's/socket.io/socketio/g' ../../LogoPaths.js
#Fixes recast.io
sed -i 's/recast.ai/recastai/g' ../../LogoPaths.js
#Fixes void 
sed -i 's/void /voidSVG /g' ../../LogoPaths.js
#Fixes void in export
sed -i 's/void,/voidSVG,/g' ../../LogoPaths.js
#Removes void
#sed -i 's/void/voidSVG/g' ../../LogoPaths.js

echo "}" >> ../../LogoPaths.js

rm -rf paths.txt

ls | grep svg | awk '{ printf "\"./logos/logos/%s\";\n",$0}' >> paths.txt

paste -d" " ../../LogoPaths.js paths.txt > tempPaths.txt

rm -f ../../LogoPaths.js

cat tempPaths.txt > ../../LogoPaths.js
