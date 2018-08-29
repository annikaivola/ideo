//tämä mahdollisesti liittyy loadingiin, pitää vielä hiukan perehtyä
export default class MainService{
    static load(cb){
        setTimeout(cb,1000);
    }
}