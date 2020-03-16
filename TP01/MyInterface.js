/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'showDiamond').name('Diamond')
        this.gui.add(this.scene, 'showTriangle').name('Triangle');
        this.gui.add(this.scene, 'showParallelogram').name('Parallelogram');
        this.gui.add(this.scene, 'showTriangleSmall').name('Small Triangle');
        this.gui.add(this.scene, 'showTriangleBig').name('Big Triangle');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}