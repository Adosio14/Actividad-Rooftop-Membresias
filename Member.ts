abstract class Member {
    constructor(protected name: string, protected membershipValue: number, 
        protected maxTime,protected haveAds : boolean, protected membershipLevel : string ) {
    }

    abstract getMembership(): String ;
}

