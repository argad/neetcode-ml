class Singleton {
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    static instance = null
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

constructor() {
    if (Singleton.instance) {
        return Singleton.instance
    }
    this.value = ""
    Singleton.instance = this
}

    /**
     * @return {string}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value) {
        this.value = value;
    }
}
