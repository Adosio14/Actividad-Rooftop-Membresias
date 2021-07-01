export class Basic extends Member {
    constructor(protected name: string, protected maxTime : number, 
        protected membershipValue: number, protected haveAds:boolean,protected membershipLevel : string){
            super(name, maxTime, membershipValue, haveAds, membershipLevel)
            this.name = name
            this.maxTime = 30 
            this.membershipValue = 3
            this.haveAds = false
            this.membershipLevel = membershipLevel
        }       
    getMembership(){
        
        return `El cliente ${this.name} Cuenta con una membresía ${this.membershipLevel}, con un valor de: ${this.membershipValue} Dólares
        Cuenta con anuncios: ${this.haveAds}. La cantidad máxima de días son: ${this.maxTime} dias`
    }
}