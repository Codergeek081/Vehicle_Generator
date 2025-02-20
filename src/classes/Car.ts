// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class extends Vehicle
class Car extends Vehicle {
  wheels: Wheel[];

  // Constructor for the Car class
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
    // Call the parent constructor
    super(vin, color, make, model, year, weight, topSpeed);

    // Ensure the car always has exactly 4 wheels
    if (wheels.length === 0) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else if (wheels.length === 4) {
      this.wheels = wheels;
    } else {
      throw new Error('A car needs to have exactly 4 wheels.');
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    // Print wheel details
    console.log(`Wheels: ${this.wheels.length} wheels`);
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Car class
export default Car;