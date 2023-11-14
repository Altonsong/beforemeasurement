const locationSelect = document.getElementById('location');
let locationCost = 0;

locationSelect.addEventListener('change', function () {
  const selectedValue = locationSelect.value;

  switch (selectedValue) {
    case 'disabled':
      locationCost = 1500;
      break;
    case 'downtown':
      locationCost = 1500;
      break;
    case 'north-york':
      locationCost = 800;
      break;
    case 'scarborough':
      locationCost = 0;
      break;
    case 'markham':
      locationCost = 0;
      break;
    case 'richmond-hill':
      locationCost = 500;
      break;
    case 'etobicoke':
      locationCost = 1500;
      break;
    case 'vaughan':
      locationCost = 800;
      break;
    default:
      locationCost = 0;
      break;
  }

});
            
  
document.addEventListener('DOMContentLoaded', function () {
  const wallCabinetInput = document.getElementById('wallCabinet');
  const baseCabinetInput = document.getElementById('baseCabinet');
  const countertopCheckbox = document.getElementById('countertopCheckbox');
  const backsplashCheckbox = document.getElementById('backsplashCheckbox');
  const kitchenFaucetCheckbox = document.getElementById('kitchenFaucetCheckbox');
  const kitchenSinkCheckbox = document.getElementById('kitchenSinkCheckbox');

  const bath1FloorTileCheckbox = document.getElementById('bath1FloorTileCheckbox');
  const bath1WallTileCheckbox = document.getElementById('bath1WallTileCheckbox');
  const bath1VanityCheckbox = document.getElementById('bath1VanityCheckbox');
  const bath1VanityFaucetCheckbox = document.getElementById('bath1VanityFaucetCheckbox');
  const bath1VanityLightCheckbox = document.getElementById('bath1VanityLightCheckbox');
  const bath1VanityMirrorCheckbox = document.getElementById('bath1VanityMirrorCheckbox');
  const bath1BathtubCheckbox = document.getElementById('bath1BathtubCheckbox');
  const bath1ShowerCheckbox = document.getElementById('bath1ShowerCheckbox');
  const bath1ToiletCheckbox = document.getElementById('bath1ToiletCheckbox');
  const bath1ShowerDoorCheckbox = document.getElementById('bath1ShowerDoorCheckbox');

  const bath2FloorTileCheckbox = document.getElementById('bath2FloorTileCheckbox');
  const bath2WallTileCheckbox = document.getElementById('bath2WallTileCheckbox');
  const bath2VanityCheckbox = document.getElementById('bath2VanityCheckbox');
  const bath2VanityFaucetCheckbox = document.getElementById('bath2VanityFaucetCheckbox');
  const bath2VanityLightCheckbox = document.getElementById('bath2VanityLightCheckbox');
  const bath2VanityMirrorCheckbox = document.getElementById('bath2VanityMirrorCheckbox');
  const bath2BathtubCheckbox = document.getElementById('bath2BathtubCheckbox');
  const bath2ShowerCheckbox = document.getElementById('bath2ShowerCheckbox');
  const bath2ToiletCheckbox = document.getElementById('bath2ToiletCheckbox');
  const bath2ShowerDoorCheckbox = document.getElementById('bath2ShowerDoorCheckbox');

  const bath3FloorTileCheckbox = document.getElementById('bath3FloorTileCheckbox');
  const bath3WallTileCheckbox = document.getElementById('bath3WallTileCheckbox');
  const bath3VanityCheckbox = document.getElementById('bath3VanityCheckbox');
  const bath3VanityFaucetCheckbox = document.getElementById('bath3VanityFaucetCheckbox');
  const bath3VanityLightCheckbox = document.getElementById('bath3VanityLightCheckbox');
  const bath3VanityMirrorCheckbox = document.getElementById('bath3VanityMirrorCheckbox');
  const bath3BathtubCheckbox = document.getElementById('bath3BathtubCheckbox');
  const bath3ShowerCheckbox = document.getElementById('bath3ShowerCheckbox');
  const bath3ToiletCheckbox = document.getElementById('bath3ToiletCheckbox');
  const bath3ShowerDoorCheckbox = document.getElementById('bath3ShowerDoorCheckbox');

  const laminateInput = document.getElementById('laminateInput');
  const vinylInput = document.getElementById('vinylInput');
  const hardwoodInput = document.getElementById('hardwoodInput');
  const floortileInput = document.getElementById('floortileInput');
  
  const paintWallInput = document.getElementById('paintWallInput');
  const paintDoorInput = document.getElementById('paintDoorInput');
  const paintBaseboardInput = document.getElementById('paintBaseboardInput');
  const paintCeilingInput = document.getElementById('paintCeilingInput');
  const removePopcornInput = document.getElementById('removePopcornInput');
  
  const showPriceDiv = document.getElementById('showPriceDiv');
  const saveDataBtn = document.getElementById('saveData');
  const sendEmailBtn = document.getElementById('sendEmail');

     
  const CostBtn = document.getElementById('renoCost');
  /*const showPriceDiv = document.querySelector('.showPrice');*/


  CostBtn.addEventListener('click', function () {
    const wallCabinetCost = wallCabinetInput.value * 200 || 0;
    const baseCabinetCost = baseCabinetInput.value * 200 || 0;
    const totalCabinetCount = parseInt(wallCabinetInput.value) + parseInt(baseCabinetInput.value);

    let kitchenInstallCost = 0;
    if (totalCabinetCount >= 20) {
      kitchenInstallCost = 3200;
    } else if (totalCabinetCount >= 15) {
      kitchenInstallCost = 2400;
    } else if (totalCabinetCount >= 1) {
      kitchenInstallCost = 1600;
    }

    let countertopCost = 0;
    if (countertopCheckbox.checked) {
      countertopCost = parseInt(baseCabinetInput.value) <= 10 ? 2500 : 4100;
    }

    let backsplashCost = 0;
    if (backsplashCheckbox.checked) {
      backsplashCost = parseInt(wallCabinetInput.value) <= 10 ? 1000 : 2000;
    }

    let kitchenFaucetCost = kitchenFaucetCheckbox.checked ? 300 : 0;
    let kitchenSinkCost = kitchenSinkCheckbox.checked ? 350 : 0;

    let kitchenPlumbingCost = 0;
    if (kitchenFaucetCheckbox.checked || kitchenSinkCheckbox.checked) {
      kitchenPlumbingCost = 600;
    }

    const kitchenPaintCost = 500;

    const kitchenSubCost =
      wallCabinetCost +
      baseCabinetCost +
      kitchenInstallCost +
      countertopCost +
      backsplashCost +
      kitchenSinkCost +
      kitchenFaucetCost +
      kitchenPlumbingCost;

    let kitchenTotalCost = 0;
    if (kitchenSubCost > 0) {
        kitchenTotalCost = kitchenSubCost + kitchenPaintCost;
    }
      

    let bath1FloorTileCost = bath1FloorTileCheckbox.checked ? 191 : 0;
    let bath1WallTileCost = bath1WallTileCheckbox.checked ? 460 : 0;
    let bath1VanityCost = bath1VanityCheckbox.checked ? 600 : 0;
    let bath1VanityFaucetCost = bath1VanityFaucetCheckbox.checked ? 100 : 0;
    let bath1VanityLightCost = bath1VanityLightCheckbox.checked ? 200 : 0;
    let bath1VanityMirrorCost = bath1VanityMirrorCheckbox.checked ? 100 : 0;
    let bath1BathtubCost = bath1BathtubCheckbox.checked ? 500 : 0;
    let bath1ShowerCost = bath1ShowerCheckbox.checked ? 450 : 0;
    let bath1ToiletCost = bath1ToiletCheckbox.checked ? 200 : 0;
    let bath1ShowerDoorCost = bath1ShowerDoorCheckbox.checked ? 1500 : 0;

    let bath1FloorTileInstallCost = 0;
    if (bath1FloorTileCheckbox.checked) {
      bath1FloorTileInstallCost = 1200;
    }

    let bath1WallTileInstallCost = 0;
    if (bath1WallTileCheckbox.checked) {
      bath1WallTileInstallCost = 3000;
    }

    let bath1VanityInstallCost = 0;
    if (bath1VanityCheckbox.checked) {
      bath1VanityInstallCost = 200;
    }

    let bath1VanityFaucetInstallCost = 0;
    if (bath1VanityFaucetCheckbox.checked) {
      bath1VanityFaucetInstallCost = 250;
    }

    let bath1VanityLightInstallCost = 0;
    if (bath1VanityLightCheckbox.checked) {
      bath1VanityLightInstallCost = 150;
    }

    let bath1VanityMirrorInstallCost = 0;
    if (bath1VanityMirrorCheckbox.checked) {
      bath1VanityMirrorInstallCost = 50;
    }

    let bath1BathtubInstallCost = 0;
    if (bath1BathtubCheckbox.checked) {
      bath1BathtubInstallCost = 900;
    }

    let bath1ShowerInstallCost = 0;
    if (bath1ShowerCheckbox.checked) {
      bath1ShowerInstallCost = 1400;
    }

    let bath1ToiletInstallCost = 0;
    if (bath1ToiletCheckbox.checked) {
      bath1ToiletInstallCost = 150;
    }

    const bath1PaintCost = 300;

    const bath1SubCost =
      bath1FloorTileCost +
      bath1WallTileCost +
      bath1VanityCost +
      bath1VanityFaucetCost +
      bath1VanityLightCost +
      bath1VanityMirrorCost +
      bath1BathtubCost +
      bath1ShowerCost +
      bath1ToiletCost +
      bath1ShowerDoorCost +
      bath1FloorTileInstallCost +
      bath1WallTileInstallCost +
      bath1VanityInstallCost +
      bath1VanityFaucetInstallCost +
      bath1VanityLightInstallCost +
      bath1VanityMirrorInstallCost +
      bath1BathtubInstallCost +
      bath1ShowerInstallCost +
      bath1ToiletInstallCost;

    let bath1TotalCost = 0;
    if (bath1SubCost > 0) {
        bath1TotalCost = bath1SubCost + bath1PaintCost;
    }
          
    
    let bath2FloorTileCost = bath2FloorTileCheckbox.checked ? 191 : 0;
    let bath2WallTileCost = bath2WallTileCheckbox.checked ? 460 : 0;
    let bath2VanityCost = bath2VanityCheckbox.checked ? 600 : 0;
    let bath2VanityFaucetCost = bath2VanityFaucetCheckbox.checked ? 100 : 0;
    let bath2VanityLightCost = bath2VanityLightCheckbox.checked ? 200 : 0;
    let bath2VanityMirrorCost = bath2VanityMirrorCheckbox.checked ? 100 : 0;
    let bath2BathtubCost = bath2BathtubCheckbox.checked ? 500 : 0;
    let bath2ShowerCost = bath2ShowerCheckbox.checked ? 450 : 0;
    let bath2ToiletCost = bath2ToiletCheckbox.checked ? 200 : 0;
    let bath2ShowerDoorCost = bath2ShowerDoorCheckbox.checked ? 1500 : 0;

    let bath2FloorTileInstallCost = 0;
    if (bath2FloorTileCheckbox.checked) {
      bath2FloorTileInstallCost = 1200;
    }

    let bath2WallTileInstallCost = 0;
    if (bath2WallTileCheckbox.checked) {
      bath2WallTileInstallCost = 3000;
    }

    let bath2VanityInstallCost = 0;
    if (bath2VanityCheckbox.checked) {
      bath2VanityInstallCost = 200;
    }

    let bath2VanityFaucetInstallCost = 0;
    if (bath2VanityFaucetCheckbox.checked) {
      bath2VanityFaucetInstallCost = 250;
    }

    let bath2VanityLightInstallCost = 0;
    if (bath2VanityLightCheckbox.checked) {
      bath2VanityLightInstallCost = 150;
    }

    let bath2VanityMirrorInstallCost = 0;
    if (bath2VanityMirrorCheckbox.checked) {
      bath2VanityMirrorInstallCost = 50;
    }

    let bath2BathtubInstallCost = 0;
    if (bath2BathtubCheckbox.checked) {
      bath2BathtubInstallCost = 900;
    }

    let bath2ShowerInstallCost = 0;
    if (bath2ShowerCheckbox.checked) {
      bath2ShowerInstallCost = 1400;
    }

    let bath2ToiletInstallCost = 0;
    if (bath2ToiletCheckbox.checked) {
      bath2ToiletInstallCost = 150;
    }

    const bath2PaintCost = 300;

    const bath2SubCost =
      bath2FloorTileCost +
      bath2WallTileCost +
      bath2VanityCost +
      bath2VanityFaucetCost +
      bath2VanityLightCost +
      bath2VanityMirrorCost +
      bath2BathtubCost +
      bath2ShowerCost +
      bath2ToiletCost +
      bath2ShowerDoorCost +
      bath2FloorTileInstallCost +
      bath2WallTileInstallCost +
      bath2VanityInstallCost +
      bath2VanityFaucetInstallCost +
      bath2VanityLightInstallCost +
      bath2VanityMirrorInstallCost +
      bath2BathtubInstallCost +
      bath2ShowerInstallCost +
      bath2ToiletInstallCost;

    let bath2TotalCost = 0;
    if (bath2SubCost > 0) {
      bath2PaintCost;
      bath2TotalCost = bath2SubCost + bath2PaintCost;
    }
      
        
    let bath3FloorTileCost = bath3FloorTileCheckbox.checked ? 191 : 0;
    let bath3WallTileCost = bath3WallTileCheckbox.checked ? 460 : 0;
    let bath3VanityCost = bath3VanityCheckbox.checked ? 600 : 0;
    let bath3VanityFaucetCost = bath3VanityFaucetCheckbox.checked ? 100 : 0;
    let bath3VanityLightCost = bath3VanityLightCheckbox.checked ? 200 : 0;
    let bath3VanityMirrorCost = bath3VanityMirrorCheckbox.checked ? 100 : 0;
    let bath3BathtubCost = bath3BathtubCheckbox.checked ? 500 : 0;
    let bath3ShowerCost = bath3ShowerCheckbox.checked ? 450 : 0;
    let bath3ToiletCost = bath3ToiletCheckbox.checked ? 200 : 0;
    let bath3ShowerDoorCost = bath3ShowerDoorCheckbox.checked ? 1500 : 0;

    let bath3FloorTileInstallCost = 0;
    if (bath3FloorTileCheckbox.checked) {
      bath3FloorTileInstallCost = 1200;
    }

    let bath3WallTileInstallCost = 0;
    if (bath3WallTileCheckbox.checked) {
      bath3WallTileInstallCost = 3000;
    }

    let bath3VanityInstallCost = 0;
    if (bath3VanityCheckbox.checked) {
      bath3VanityInstallCost = 200;
    }

    let bath3VanityFaucetInstallCost = 0;
    if (bath3VanityFaucetCheckbox.checked) {
      bath3VanityFaucetInstallCost = 250;
    }

    let bath3VanityLightInstallCost = 0;
    if (bath3VanityLightCheckbox.checked) {
      bath3VanityLightInstallCost = 150;
    }

    let bath3VanityMirrorInstallCost = 0;
    if (bath3VanityMirrorCheckbox.checked) {
      bath3VanityMirrorInstallCost = 50;
    }

    let bath3BathtubInstallCost = 0;
    if (bath3BathtubCheckbox.checked) {
      bath3BathtubInstallCost = 900;
    }

    let bath3ShowerInstallCost = 0;
    if (bath3ShowerCheckbox.checked) {
      bath3ShowerInstallCost = 1400;
    }

    let bath3ToiletInstallCost = 0;
    if (bath3ToiletCheckbox.checked) {
      bath3ToiletInstallCost = 150;
    }

    const bath3PaintCost = 300;

    const bath3SubCost =
      bath3FloorTileCost +
      bath3WallTileCost +
      bath3VanityCost +
      bath3VanityFaucetCost +
      bath3VanityLightCost +
      bath3VanityMirrorCost +
      bath3BathtubCost +
      bath3ShowerCost +
      bath3ToiletCost +
      bath3ShowerDoorCost +
      bath3FloorTileInstallCost +
      bath3WallTileInstallCost +
      bath3VanityInstallCost +
      bath3VanityFaucetInstallCost +
      bath3VanityLightInstallCost +
      bath3VanityMirrorInstallCost +
      bath3BathtubInstallCost +
      bath3ShowerInstallCost +
      bath3ToiletInstallCost;
      
    let bath3TotalCost = 0;
    if (bath3SubCost > 0) {
        bath3TotalCost = bath3SubCost + bath3PaintCost;
    }
      
      
    
    const laminateCost = laminateInput.value * 2.5 || 0;
    const vinylCost = vinylInput.value * 3.5 || 0;
    const hardwoodCost = hardwoodInput.value * 7 || 0;
    const floortileCost = floortileInput.value * 10 || 0;
    
    
    let laminateInstallCost = 0;
    if (laminateInput.value>=1090) {
      laminateInstallCost = laminateInput.value * 2.2;
    } else if (laminateInput.value>=840) {
      laminateInstallCost = laminateInput.value * 2.5;
    } else if (laminateInput.value>=630) {
      laminateInstallCost = laminateInput.value * 3;
    } else if (laminateInput.value>=0) {
      laminateInstallCost = laminateInput.value * 3.5;
    }
    
     
    
    let vinylInstallCost = 0;
    if (vinylInput.value>=1090) {
      vinylInstallCost = vinylInput.value * 2.2;
    } else if (vinylInput.value>=840) {
      vinylInstallCost = vinylInput.value * 2.5;
    } else if (vinylInput.value>=630) {
      vinylInstallCost = vinylInput.value * 3;
    } else if (vinylInput.value>=0) {
      vinylInstallCost = vinylInput.value * 3.5;
    }
    
    
    
    let hardwoodInstallCost = 0;
    if (hardwoodInput.value>=1090) {
      hardwoodInstallCost = hardwoodInput.value * 2.8;
    } else if (hardwoodInput.value>=840) {
      hardwoodInstallCost = hardwoodInput.value * 3;
    } else if (hardwoodInput.value>=630) {
      hardwoodInstallCost = hardwoodInput.value * 4;
    } else if (hardwoodInput.value>=0) {
      hardwoodInstallCost = hardwoodInput.value * 5;
    }
    
    
    
    let FloortileInstallCost = 0;
    if (floortileInput.value>=150) {
      FloortileInstallCost = floortileInput.value * 15;
    } else if (floortileInput.value>=80) {
      FloortileInstallCost = floortileInput.value * 20;
    } else if (floortileInput.value>=0) {
      FloortileInstallCost = floortileInput.value * 28;
    }
    
        
        
    const floorTotalCost =
          laminateCost +
          vinylCost +
          hardwoodCost +
          floortileCost +
          laminateInstallCost +
          vinylInstallCost +
          hardwoodInstallCost +
          FloortileInstallCost;
    
    
    let paintWallCost = 0;
    if (paintWallInput.value>=1090) {
      paintWallCost = paintWallInput.value * 2.8;
    } else if (paintWallInput.value>=840) {
      paintWallCost = paintWallInput.value * 3;
    } else if (paintWallInput.value>=630) {
      paintWallCost = paintWallInput.value * 3.5;
    } else if (paintWallInput.value>=0) {
      paintWallCost = paintWallInput.value * 4;
    }
    
        
    const paintDoorCost = paintDoorInput.value * 70 || 0;
    const paintBaseboardCost = paintWallInput.value * 0.5 || 0;
    
    
    
    let paintCeilingCost = 0;
    if (paintCeilingInput.value>=840) {
      paintCeilingCost = paintCeilingInput.value * 1.5;
    } else if (paintCeilingInput.value>=630) {
      paintCeilingCost = paintCeilingInput.value * 1.8;
    } else if (paintCeilingInput.value>=400) {
      paintCeilingCost = paintCeilingInput.value * 2.5;
    } else if (paintCeilingInput.value>=0) {
      paintCeilingCost = paintCeilingInput.value * 3.5;
    }
    
    
        
    let removePopcornCost = 0;
    if (removePopcornInput.value>=840) {
      removePopcornCost = removePopcornInput.value * 1.5;
    } else if (removePopcornInput.value>=630) {
      removePopcornCost = removePopcornInput.value * 1.8;
    } else if (removePopcornInput.value>=400) {
      removePopcornCost = removePopcornInput.value * 2.5;
    } else if (removePopcornInput.value>=0) {
      removePopcornCost = removePopcornInput.value * 3.5;
    }
    
     
    
    const paintTotalCost =
          paintWallCost +
          paintDoorCost +
          paintBaseboardCost +
          paintCeilingCost +
          removePopcornCost;
        
    let demolishKitchenTime = 0;
    if (kitchenTotalCost > 0) {
      demolishKitchenTime = 3.5;
    }
    
    let demolishBath1Time = 0;
    if (bath1TotalCost > 0) {
      demolishBath1Time = 3.5;
    }
    
    let demolishBath2Time = 0;
    if (bath2TotalCost > 0) {
      demolishBath2Time = 3;
    }
    
    let demolishBath3Time = 0;
    if (bath3TotalCost > 0) {
      demolishBath3Time = 3;
    }
    
    const woodFloorArea = parseInt(laminateInput.value) + parseInt(vinylInput.value) + parseInt(hardwoodInput.value);
        
    
    let demolishWoodFloorTime = 0;
    if (woodFloorArea.value>=800 ) {
      demolishWoodFloorTime = 2;
    } else if (woodFloorArea.value>=400) {
      demolishWoodFloorTime = 1.5;
    } else if (woodFloorArea.value>=200) {
      demolishWoodFloorTime = 1;
    } else if (woodFloorArea.value>=0) {
      demolishWoodFloorTime = 0.5;
    }
    
    
    let demolishTileFloorTime = 0;
    if (floortileInput.value>=200) {
      demolishTileFloorTime = 3;
    } else if (floortileInput.value>=100) {
      demolishTileFloorTime = 2;
    } else if (floortileInput.value>=50) {
      demolishTileFloorTime = 1.5;
    } else if (floortileInput.value>=0) {
      demolishTileFloorTime = 1;
    }
    
        
    const demolishTotalTime = 
          demolishKitchenTime +
          demolishBath1Time +
          demolishBath2Time +
          demolishBath3Time +
          demolishWoodFloorTime;
          //demolishTileFloorTime;
    
    let demolishTotalCost = 0;
    if (demolishTotalTime >= 13) {
      demolishTotalCost = 4000;
    } else if (demolishTotalTime >= 10) {
      demolishTotalCost = 3200;
    } else if (demolishTotalTime >= 7) {
      demolishTotalCost = 2400;
    } else if (demolishTotalTime > 0) {
      demolishTotalCost = 1600;
    }
          
     
    let deliveryKitchenTime = 0;
    if (kitchenTotalCost > 0) {
      deliveryKitchenTime = 1;
    }
    
    let deliveryBath1Time = 0;
    if (bath1TotalCost > 0) {
      deliveryBath1Time = 1;
    }
    
    let deliveryBath2Time = 0;
    if (bath2TotalCost > 0) {
      deliveryBath2Time = 1;
    }
    
    let deliveryBath3Time = 0;
    if (bath3TotalCost > 0) {
      deliveryBath3Time = 1;
    }
    
    let deliveryFloorTime = 0;
    if (floorTotalCost > 0) {
      deliveryFloorTime = 1;
    }   
    
    const deliveryTotalTime = 
          deliveryKitchenTime +
          deliveryBath1Time +
          deliveryBath2Time +
          deliveryBath3Time +
          deliveryFloorTime;
    
    
    let deliveryTotalCost = 0;
    if (deliveryTotalTime >= 4) {
        deliveryTotalCost = 540;
    } else if (demolishTotalTime >= 3) {
        deliveryTotalCost = 460;
    } else if (demolishTotalTime >= 2) {
        deliveryTotalCost = 380;
    } else if (demolishTotalTime > 0) {
        deliveryTotalCost = 300;
    }
    
    
    let cleanTotalCost = 0;
    if (deliveryTotalTime >= 4) {
        cleanTotalCost = 400;
    } else if (demolishTotalTime >= 3) {
        cleanTotalCost = 300;
    } else if (demolishTotalTime > 0) {
        cleanTotalCost = 260;
    }
    
    let travelTotalCost = 0;
    if (deliveryTotalTime >= 4) {
      travelTotalCost = 1800;
    } else if (demolishTotalTime >= 3) {
      travelTotalCost = 1500;
    } else if (demolishTotalTime >= 2) {
      travelTotalCost = 1200;
    } else if (demolishTotalTime > 0) {
      travelTotalCost = 1000;
    } 
             

    const subCost = 
        kitchenTotalCost +
        bath1TotalCost +
        bath2TotalCost +
        bath3TotalCost +
        floorTotalCost +
        paintTotalCost +
        demolishTotalCost +
        deliveryTotalCost +
        cleanTotalCost +
        travelTotalCost;

    let contingency = 0;
    if (subCost > 0) {
        contingency = subCost * 0.1;
      }
      
    let managementFee = 0;
    if (subCost > 0) {
        managementFee = subCost * 0.05;
      }

    const totalCost = 
        subCost +
        contingency +
        managementFee +
        locationCost;

    const marginRate = 0.2;

    let testGrossProfit = totalCost/(1-marginRate) - totalCost;
    
    let price = 0;
    if (testGrossProfit > 18000) {
        price = totalCost + 18000;
    } else if (testGrossProfit < 1500) {
        price = totalCost + 1500; 
    } price = totalCost + testGrossProfit;
          
    let showPrice = Math.ceil(price / 100) * 100;


    console.log('kitchenTotalCost', kitchenTotalCost);
    console.log('bath1TotalCost', bath1TotalCost);
    console.log('bath2TotalCost', bath2TotalCost);
    console.log('bath3TotalCost', bath3TotalCost);
    console.log('floorTotalCost', floorTotalCost);
    console.log('paintingTotalCost', paintTotalCost);
    console.log('demolishTotalTime', demolishTotalTime);
    console.log('demolishTotalCost', demolishTotalCost);
    console.log('deliveryTotalCost', deliveryTotalCost);
    console.log('cleanTotalCost', cleanTotalCost);
    console.log('Location Cost:', locationCost);
    console.log('contingency', contingency);
    console.log('managementFee', managementFee);
    console.log('totalCost', totalCost);
    console.log('testGrossProfit', testGrossProfit);
    console.log('price', price);
    console.log('showprice', showPrice);


    // Show the Save Data and Send Email buttons
    saveDataBtn.style.display = 'inline-block';
    sendEmailBtn.style.display = 'inline-block';

    saveDataBtn.addEventListener('click', function () {
        const savedData = {
            showPrice:showPrice,
        };
    localStorage.setItem('savedData', JSON.stringify(savedData));

    console.log('Data saved!');

    sendEmailBtn.addEventListener('click', function () {
    console.log('Email sent!');

  });
});
      
  const bathroomInput = document.getElementById('bathroom');

  const bath1Box = document.getElementById('bath1Box');
  const bath2Box = document.getElementById('bath2Box');
  const bath3Box = document.getElementById('bath3Box');

  bathroomInput.addEventListener('change', function () {
    const bathroomValue = parseInt(bathroomInput.value);

    bath1Box.style.display = 'none';
    bath2Box.style.display = 'none';
    bath3Box.style.display = 'none';

    if (bathroomValue === 1) {
      bath1Box.style.display = 'block';
    } else if (bathroomValue === 2) {
      bath1Box.style.display = 'block';
      bath2Box.style.display = 'block';
    } else if (bathroomValue === 3) {
      bath1Box.style.display = 'block';
      bath2Box.style.display = 'block';
      bath3Box.style.display = 'block';
    }
  });
});

})
