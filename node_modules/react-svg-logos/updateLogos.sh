#! /bin/bash
cd src/logos/logos/

echo "Cleaning up Old Files"
rm -f ../index.js

rm -f ../../Logos/importLogos.txt
echo "Removing ../../Logos/importLogos.txt"

rm -f ../../Logos/logoComponentList.txt
echo "Removing ../../Logos/logoComponentList.txt"

rm -f ../../Logos/logoLowercaseComponentList.txt
echo "Removing ../../Logos/logoLowercaseComponentList.txt"
rm -f ../../Logos/*.js
echo "Removing ../../Logos/*.js"
sleep 2


#List File names
ls | grep svg | awk '{ printf "%s.js\n", substr($0,1,length($0)-4)}' | sed 's/.*/\u&/' > ../../Logos/logoComponentList.txt

cd ../../Logos

rm -f ../index.js
echo "Removing ../../../index.js"

#Removes Dashes
sed -i 's/-//g' logoComponentList.txt
#Fixes 6s
sed -i 's/6/Six/g' logoComponentList.txt
#Fixes 500s
sed -i 's/500/FiveHundred/g' logoComponentList.txt
#Fixes 100s
sed -i 's/100/OneHundred/g' logoComponentList.txt
#Fixes C++
sed -i 's/++/plusplus/g' logoComponentList.txt
#Fixes Lucene.Net
sed -i 's/Lucene.net/LuceneDotNet/g' logoComponentList.txt
#Fixes Message.io
sed -i 's/Message.io/Messageio/g' logoComponentList.txt
#Fixes Socket.io
sed -i 's/Socket.io/Socketio/g' logoComponentList.txt
#Fixes recast.io
sed -i 's/Recast.ai/Recastai/g' logoComponentList.txt
#Fixes void 
sed -i 's/void/VoidSVG /g' logoComponentList.txt
#Fixes void in export
sed -i 's/void,/VoidSVG,/g' logoComponentList.txt

sed -i 's/Component/ComponentSVG/g' logoComponentList.txt

sed -i 's/React/ReactSVG/g' logoComponentList.txt


#Create new files
cat logoComponentList.txt | xargs touch


#List File names lowercase
ls ../logos/logos | grep svg | awk '{ printf "%s\n", substr($0,1,length($0)-4)}' >> logoLowercaseComponentList.txt

#Removes Dashes
sed -i 's/-//g' logoLowercaseComponentList.txt
#Fixes 6s
sed -i 's/6/six/g' logoLowercaseComponentList.txt
#Fixes 500s
sed -i 's/500/fiveHundred/g' logoLowercaseComponentList.txt
#Fixes 100s
sed -i 's/100/oneHundred/g' logoLowercaseComponentList.txt
#Fixes C++
sed -i 's/++/plusplus/g' logoLowercaseComponentList.txt
#Fixes Lucene.Net
sed -i 's/lucene.net/lucenenet/g' logoLowercaseComponentList.txt
#Fixes Message.io
sed -i 's/message.io/messageio/g' logoLowercaseComponentList.txt
#Fixes Socket.io
sed -i 's/socket.io/socketio/g' logoLowercaseComponentList.txt
#Fixes recast.io
sed -i 's/recast.ai/recastai/g' logoLowercaseComponentList.txt
#Fixes void 
sed -i 's/void/voidSVG /g' logoLowercaseComponentList.txt
#Fixes void in export
sed -i 's/void,/voidSVG,/g' logoLowercaseComponentList.txt

sed -i 's/component/componentSVG/g' logoLowercaseComponentList.txt

sed -i 's/react/reactSVG/g' logoLowercaseComponentList.txt


echo "Rebuilding imports for each logo"
cat logoLowercaseComponentList.txt | awk '{ printf "\nimport { %s } from \"../LogoPaths.js\";", $0}' > importLogos.txt

readarray importLogoPathsArray < importLogos.txt
readarray componentFileArray < logoComponentList.txt
readarray logoLowercaseComponentArray < logoLowercaseComponentList.txt
index=1
touch ../index.js

for file in "${componentFileArray[@]}"
do
  echo "import React, { Component } from \"react\";" >> $file
  # echo ${importLogoPathsArray[index]}
  # Remove comment to debug script
  # sleep 1
  echo ${importLogoPathsArray[index]} >> $file
  echo "export default class $(echo "$file" | awk '{ printf "%s", substr($0,1,length($0)-3)}')" | tr -d "\n" >> $file
  echo " extends Component { " >> $file
  printf "\t render() {\n\t\t return<img src={$( echo ${logoLowercaseComponentArray[index-1]} | tr -d "\n")}></img>" >> $file
  printf "\n\t}\n" >> $file
  printf "\n}" >> $file

  #Adds import the base library file React-SVG-Logos
  echo "import $(echo "$file" | awk '{ printf "%s", substr($0,1,length($0)-3)}')" | tr -d "\n" >> ../index.js
  echo " from \"./Logos/$(echo "$file" | awk '{ printf "%s", substr($0,1,length($0)-3)}')" | tr -d "\n" >> ../index.js
  echo "\";" >> ../index.js
  printf "."
  index=$((index+1))
done

echo "export {" >> ../index.js

for file in "${componentFileArray[@]}"
do
    echo "$file" | awk '{ printf "%s", substr($0,1,length($0)-3)}' >> ../index.js
    printf ",\n" >> ../index.js
done

echo "}" >> ../index.js
