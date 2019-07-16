import {action,computed,observable} from "mobx";

class Store {
    @observable data={
        name:"zhangfei",
        age:43,
        sex:"man",
        lev:"high"
    }
    @action setData(e){
        this.data.name=e.name
        this.data.age=e.age
        this.data.sex=e.sex
        this.data.lev=e.lev
    }

    @computed get getData(){
        return this.data
    }
}

const store=new Store()
export {store}