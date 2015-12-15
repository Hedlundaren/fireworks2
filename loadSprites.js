 function loadRocket(){
    
    var map = textureLoader.load("images/particle.png");

        
        var material = new THREE.SpriteMaterial( {map: map, color: 0xffffff, fog: true, blending: THREE.AdditiveBlending, transparent: true} );
        material.opacity = 1.0;
        var sprite = new THREE.Sprite(material);
        sprite.scale.set(0.08,0.08,0.08);
        sprite.visible = true;

        var position = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }
        var velocity = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }
        rocket = {
          'sprite' : sprite,
          'position' : position,
          'velocity' : velocity,
          'age' : 0
        }
   

    for (var i = 0; i < particles.length; ++i){
        particleGroup.add(rocket.sprite);
    }
}

function loadParticles(){
    
    var map = textureLoader.load("images/particle.png");

    for(i = 0; i < particleCount; i++) {
        
        var material = new THREE.SpriteMaterial( {map: map, color: 0xffffff, fog: true, blending: THREE.AdditiveBlending, transparent: true} );
        material.opacity = 0.0;
        var sprite = new THREE.Sprite(material);
        sprite.translateX(Math.random()*10-5);
        sprite.translateY(Math.random()*10-5);
        sprite.translateZ(Math.random()*10-5);
        sprite.scale.set(0.5,0.5,0.5);
        sprite.visible = true;

        var position = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }
        var velocity = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }
        particle = {
          'sprite' : sprite,
          'position' : position,
          'velocity' : velocity,
          'age' : 0
        }
        particles.push(particle);
    }
   

    for (var i = 0; i < particles.length; ++i){
        particleGroup.add(particles[i].sprite);
    }
}

function loadFlares(){
    
    var map = textureLoader.load("images/particle.png");


    for(i = 0; i < flareCount; i++) {
      
        var material = new THREE.SpriteMaterial( {map: map, color: 0xffffff, fog: true, blending: THREE.AdditiveBlending, transparent: true} );
        material.opacity = 0.0;
        var sprite = new THREE.Sprite(material);
        sprite.translateX(Math.random()*10-5);
        sprite.translateY(Math.random()*10-5);
        sprite.translateZ(Math.random()*10-5);
        sprite.scale.set(0.1,0.1,0.1);
        sprite.visible = true;

        var position = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }

        var velocity = {
            'x' : 0,
            'y' : 0,
            'z' : 0,
        }

        flare = {
          'sprite' : sprite,
          'position' : position,
          'velocity' : velocity,
          'age' : 0
        }
       
        flares.push(flare);

    }
   

    for (var i = 0; i < flares.length; ++i){
        flareGroup.add(flares[i].sprite);
    }
}


function initExplosion(x,y,z){

    fCount = flareCount;
    while(fCount--){
        flare = flares[fCount];

        flare.sprite.material.opacity = 0.0;
        flare.sprite.position.x = x;
        flare.sprite.position.y = y;
        flare.sprite.position.z = z;
    } 


    pCount = particleCount;
    while(pCount--){
        particle = particles[pCount];
         // give particle speed
        particle.sprite.position.x = x;
        particle.sprite.position.y = y;
        particle.sprite.position.z = z;

        particle.velocity.x = (Math.random()-0.5)*particleInitSpeed;
        particle.velocity.y = (Math.random()-0.5)*particleInitSpeed;
        particle.velocity.z = (Math.random()-0.5)*particleInitSpeed;
     
            

        particle.sprite.material.opacity = 1.0;
    } 
}