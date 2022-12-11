# jsfuzz
Fuzzing web engines with js even though thats a dumb idea

assembling the stuff:
git clone https://github.com/petab1te/simplegluetrap
git clone https://github.com/petab1te/jshtml-malicious-dataset
git clone https://github.com/ariya/phantomjs

phantomjs requirements: 
cmake afl++ qtbase5-dev libqt5webkit5-dev

run
CC=afl-cc CXX=afl-c++ meson-CC=afl-cc CXX=afl-c++ ./configure 
cmake -DCMAKE_C_COMPILER=afl-cc -DCMAKE_CXX_COMPILER=afl-c++ . 
CC=afl-cc CXX=afl-c++ make


gluetrap requirements: 
cargo libsqlite3-dev

run
cargo run


jsfuzz requirements:
afl++

run 
afl-fuzz -i ./jshtml-malicious-dataset/combinedhtml/ -o ./output -- phantomjs/bin/phantomjs index.js @@
