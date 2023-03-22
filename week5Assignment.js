class Shoe{
    constructor(shoeName,shoeSize){
        this.shoeName = shoeName;
        this.shoeSize = shoeSize;
    }
    describe(){
        return `These ${this.shoeName} are a size ${this.shoeSize}.`;
    }
}
class Brand{
    constructor(shoeName){
        this.shoeName = shoeName;
        this.shoes = [];
    }

    addShoe(shoe){
        if (shoe instanceof shoe) {
            this.shoes.push(shoe);
            } else {
                throw new Error(`You can only add an instance of Shoe. Argument is not a shoe: ${shoe}`);
    }    
}
describe() {
    return `This brand has ${this.shoes.length} shoes.`;
    }
}
class Menu { 
    constructor() {
    this.brands = [];
    this.selectedBrand = null;
    }
    start(){
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {
        case '1' :
        this.createBrand();
        break;
        case '2' :
        this.viewBrand();
        break;
        case '3' :
        this.deleteBrand();
        break;
        case '4' :
        this.displayBrand();
        break;
        default:
        selection = 0;
                     }
        selection = this.showMainMenuOptions(); // This loop Shows the menu options for what i will be able to do with a brand once created. After a selection is chosen the menu will loop back around.
                }
        alert ('Leaving Sneaker Seller Menu App!!!'); //This alerts when you exit the loop meaning user has selected 0 or a different option outside the loop.
            }
    showMainMenuOptions(){
            return prompt(`
            0) Exit
            1) Create a new brand
            2) View a brand
            3) Delete a brand
            4) Display all brands
            `);
        }
        showBrandMenuOptions(brandInfo){
        return prompt(`
            0) Back
            1) Add a new shoe
            2) Delete a shoe
            -----------------
            ${brandInfo}
            `);
        }
        displayBrand() {
            let brandString = '';
            for (let i = 0; i < this.brands.length; i++) {      //for loop concatenate the brands together then allows the user to chose from the brands 
            brandString += i+ ') ' + this.brands[i].brand + '\n';
            }
            alert(brandString);
            }
        createBrand(){    
        let brand = prompt(`Enter new Brand Name: `);    //Prompts the user to enter a new brand name tehy would like to add
        this.brands.push(new Brand(brand));
        }
        viewBrand(){
            let index = prompt("Enter the index of the Brand that you want to view: ");
            if (index > -1 && index < this.brands.length) {
            this.selectedBrand = this.brands[index];
            let description = 'Brand Name: ' + this.selectedBrand.brand + '\n';
            description += ' ' + this.selectedBrand.describe() + '\n ';
            
            for (let i = 0; i < this.selectedBrand.shoes.length; i++) {
            description += i + ') ' + this.selectedBrand.shoes[i].shoeName + '-' + this.selectedBrand.shoes[i].shoeSize + '\n'  //for loop goes throw both the shoe and brand arrays and displays the shoes for whichever specific brand the user selects to be displayed.
                }
                let selection = this.showBrandMenuOptions(description);
                switch (selection) {
                    case '1' :
                    this.createShoe();
                    break;
                    case '2' :
                    this.deleteShoe();                  //after selecting a brand the app will pprompt the user to either add a shoe to the brand or delete the shoe from a brand.
                    }

            }
            
        }
        deleteBrand(){
            let index = prompt('Enter the index of brand you would like to remove: ');
            if (index > -1 && index < this.brands.length) { this.brands.splice(index,1);
            }}
            createShoe(){
                if (this.selectedBrand) {
                let shoeName = prompt('Enter name for new shoe: ');
                let shoeSize = prompt('Enter shoe size: ');
                this.selectedBrand.shoes.push(new Shoe(shoeName, shoeSize)); //Takes the user input for a new shoe name and the size of the shoe and ads it to the shoes array
            } else {
                alert('No brand selected. Please select a brand first.');
            }
            deleteShoe()
                let index = prompt('Enter the index of the shoe that you was sold: ');
                if (index > -1 && index < this.selectedBrand.shoes.length) { this.selectedBrand.shoes.splice(index,1);
            
        }
    }
}
            let menu = new Menu();
            menu.start();
