// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  wheels: Wheel[];

  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    super(vin, color, make, model, year, weight, topSpeed);

    // Ensure the motorbike always has exactly 2 wheels
    if (wheels.length === 0) {
      this.wheels = [new Wheel(), new Wheel()];
    } else if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      throw new Error('A motorbike must have exactly 2 wheels.');
    }
  }

  // Implementing the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie! 🏍️`);
  }

  // Overriding the printDetails method from the Vehicle class
  override printDetails(): void {  // <-- Added `override` here
    super.printDetails();
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;