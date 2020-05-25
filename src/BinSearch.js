
class BinSearchArray extends Array{

    getIndex(key){

        if(isValidKey(key)){

            let left = 0;
            let right = this.length-1;

            while(left<=right){
                let k= Math.floor((left+right)/2);
                if(this[k].key === key)
                    return k;
                else if(this[k].key < key)
                    left = k+1;
                else //a[k]>v
                    right = k-1;
            }
            return -1;
        }
    }

    getNearestKey(key){

        if(isValidKey(key)){
            /*
                besseren Algorithmus finden
            */
            let i;
            ++key;

            while((i = this.getIndex(--key)) === -1){
                /*
                    wenn key 0 ist, wird vorne eingefügt
                */
                if(key === 0) return -1;
            }

            return i;
        }
    }

    get(key){

        if(isValidKey(key)){

            let i = this.getIndex(key);

            if(i !== -1)
                return this[i].value;

            return undefined;
        }
    }

    add(key,value){

        if(isValidKey(key))
            /*
                does the key already exist?
            */
            if(this.getIndex(key) === -1) {

                this.splice(this.getNearestKey(key) + 1, 0, {
                    key: key,
                    value: value
                });
            }
            this[this.getIndex(key)] = {
                key: key,
                value: value
            };
    }

    remove(key){
        if(isValidKey(key)){
            /*
                element with key gets removed
            */
            let i = this.getIndex(key);

            if(i !== -1)
                this.splice(i,1);
        }
    }
}

function isValidKey(key){
    /*
        is the key a number?
    */
    if(isNaN(key))
        throw 'key is not a number'
    /*
        is the key lower than 0
    */
    else if(key < 0)
        throw 'key cannot be lower than 0'
    /*
        key valid
    */
    else
        return true;
}

module.exports = BinSearchArray;