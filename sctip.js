   // let nuw = new Date();
        // console.log(nuw)


        // setInterval(() => {
        //     const nuw = new Date();
        //     console.clear();
        //     console.log(`${nuw.getHours()}:${nuw.getMinutes()}:${nuw.getSeconds()}`)
        // }, 1000 )


        // tosh, qaychi, qog'oz oyni

        const user = prompt("Tanlang: 1-Tosh : 2-Qaychi : 3-Qog'oz");
        const compyuter = ((Math.random() * 3) | 0) + 1;
        console.log(compyuter);

        switch (user) {
            case "1":
                switch (compyuter) {
                    case 1:
                        console.log(`Durang`)
                        break;
                    case 2:
                        console.log(`yutingiz!\nUser: ${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""}\nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                    case 3:
                        console.log(`Siz yutqazdingiz!\nUser: ${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""}\nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                }
                break;
            case "2":
                switch (compyuter) {
                    case 1:
                        console.log(`Siz yutqazdingiz!\nUser: ${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""}\nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                    case 2:
                        console.log(`Durang`);
                        break;
                    case 3:
                        console.log(`yutingiz!\nUser:${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""}\nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                }
                break;
            case "3":
                switch (compyuter) {
                    case 1:
                        console.log(`yutingiz!\nUser: ${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""} \nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                    case 2:
                        console.log(`Siz yutqazdingiz!\nUser:${user == 1 ? 'Tosh' : "" }${user == 2 ? "qaychi" : ""}${user == 3 ? "qog'oz" : ""}\nCompyuter: ${compyuter == 1 ? "Tosh" : ""}${compyuter == 2 ? "qaychi" : ""}${compyuter == 3 ? "qog'oz" : ""}`);
                        break;
                    case 3:
                        console.log(`Durang`)
                        break;
                }
                break;

            default:
                console.log("hatolik yuz berdi!")
                break;
        }


        // kabisa yili

        // let year = prompt("yilni kiriting");

        // if(year % 4 == 0){
        //     if(year % 100 == 0){
        //         if(year % 400 == 0){
        //             console.log("kabisa yili");
        //         }else{
        //             console.log("kabisa yili emas")
        //         }
        //     }else{
        //         console.log("kabisa yili emas")
        //     }
        // }else{
        //     console.log("kabisa yili emas")
        // }