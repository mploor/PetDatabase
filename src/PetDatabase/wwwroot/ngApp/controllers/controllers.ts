namespace PetDatabase.Controllers {
    let pets = [
        { id: 1, name: "Fido", species: "Dog", age: 3, faveToy: "Rawhide bone", pic: "http://upload.wikimedia.org/wikipedia/commons/3/33/Good_dog.jpg"},
        { id: 2, name: "Fluffy", species: "Cat", age: 5, faveToy: "Toy mouse", pic: "http://www.cozycatfurniture.com/images/custom/ragdoll_cat.jpg"},
        { id: 3, name: "Spot", species: "Dog", age: 5, faveToy: "Stick", pic: "http://upload.wikimedia.org/wikipedia/commons/2/23/Dog_retrieving_stick.jpg"},
        { id: 4, name: "Yertle", species: "Turtle", age: 13, faveToy: "Soccer ball", pic: "http://people.wcsu.edu/pinout/herpetology/tcarolinei/29366343.EasternBoxTurtle2.jpg" },
        { id: 5, name: "Doofus", species: "Cat", age: 2, faveToy: "string", pic: "http://upload.wikimedia.org/wikipedia/commons/9/9b/Larry_the_cat_No10.jpg"}
    ];


    export class MasterController {
        public pets;
        public sortBy: string;
        public selectedPetId: number;
        public selectedPetName: string;

        constructor(private $state: ng.ui.IStateService) {
            this.pets = pets;
            this.sortBy = "none";
        }

        public sortByButton(selection: string) {
            this.sortBy = selection;
        }

        public selectPet(id: number) {
            this.selectedPetId = id;
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].id == id) {
                    this.selectedPetName = pets[i].name;
                }
            }
        }

        public deletePet(id: number) {
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].id == id) {
                    pets.splice(i, 1);
                }
            }
        }

        public editPet(id: number) {
            this.$state.go("edit", {id});
        }
    }

    export class DetailController {
        public pet;

        constructor(private $stateParams: ng.ui.IStateParamsService) {
            this.pet = pets.filter((p) => { return p.id == $stateParams["id"] })[0];
        }
    }

    export class AddController {
        public name: string;
        public species: string;
        public age: number;
        public faveToy: string;
        public pic: string;

        public addPet() {
            let newIndex = pets.length;
            let newId = pets[newIndex-1].id +1
            pets[newIndex] = { id: newId, name: this.name, species: this.species, age: this.age, faveToy: this.faveToy, pic: this.pic }
            this.name = "";
            this.species = "";
            this.age = undefined;
            this.faveToy = "";
            this.pic = "";
        }
    }

    export class EditController {
        public pet;

        constructor(private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.pet = pets.filter((p) => { return p.id == $stateParams["id"] })[0];
        }

        public makeChange() {
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].id == this.pet.id) {
                    pets[i].name = this.pet.name;
                    pets[i].species = this.pet.species;
                    pets[i].age = this.pet.age;
                    pets[i].faveToy = this.pet.faveToy;
                    pets[i].pic = this.pet.pic;
                }
            }
        }

        public goHome() {
            this.$state.go("master");
        }
    }
}
