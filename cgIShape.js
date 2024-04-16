//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube(subdivisions) {
    var step = 1 / subdivisions;

    function makeFace(x0, y0, z0, dx1, dy1, dz1, dx2, dy2, dz2) {
        for (var i = 0; i < subdivisions; i++) {
            for (var j = 0; j < subdivisions; j++) {
                var x1 = x0 + i * dx1 + j * dx2;
                var y1 = y0 + i * dy1 + j * dy2;
                var z1 = z0 + i * dz1 + j * dz2;

                var x2 = x1 + dx1;
                var y2 = y1 + dy1;
                var z2 = z1 + dz1;

                var x3 = x1 + dx2;
                var y3 = y1 + dy2;
                var z3 = z1 + dz2;

                var x4 = x1 + dx1 + dx2;
                var y4 = y1 + dy1 + dy2;
                var z4 = z1 + dz1 + dz2;

                addTriangle(x1, y1, z1, x3, y3, z3, x2, y2, z2);
                addTriangle(x2, y2, z2, x3, y3, z3, x4, y4, z4);
            }
        }
    }

    // Front Back
    makeFace(-0.5, -0.5, 0.5, step, 0, 0, 0, step, 0);
    makeFace(0.5, -0.5, -0.5, -step, 0, 0, 0, step, 0);

    // Left Right
    makeFace(-0.5, -0.5, -0.5, 0, 0, step, 0, step, 0);
    makeFace(0.5, -0.5, 0.5, 0, 0, -step, 0, step, 0);

    // Top Bottom
    makeFace(-0.5, 0.5, 0.5, step, 0, 0, 0, 0, -step);
    makeFace(-0.5, -0.5, -0.5, step, 0, 0, 0, 0, step);
}

//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder(radialdivision, heightdivision) {
    var radius = 0.5;
    var angleStep = (Math.PI * 2) / radialdivision;

    for (var i = 0; i < radialdivision; i++) {
        var angle1 = i * angleStep;
        var angle2 = (i + 1) * angleStep;

        for (var j = 0; j < heightdivision; j++) {
            var z1 = (j / heightdivision) - 0.5;
            var z2 = ((j + 1) / heightdivision) - 0.5;
            
            var x1 = radius * Math.cos(angle1);
            var y1 = radius * Math.sin(angle1);
            var x2 = radius * Math.cos(angle2);
            var y2 = radius * Math.sin(angle2);

            var x3 = x1;
            var y3 = y1;
            var z3 = z2;

            var x4 = x2;
            var y4 = y2;
            var z4 = z2;

            addTriangle(x1, y1, z1, x2, y2, z1, x4, y4, z4);
            addTriangle(x1, y1, z1, x4, y4, z4, x3, y3, z3);
        }
    }

    for (var i = 0; i < radialdivision; i++) {
        var angle1 = i * angleStep;
        var angle2 = (i + 1) * angleStep;

        // Top circle
        var x1 = 0, y1 = 0, z1 = 0.5;
        var x2 = radius * Math.cos(angle1), y2 = radius * Math.sin(angle1), z2 = 0.5;
        var x3 = radius * Math.cos(angle2), y3 = radius * Math.sin(angle2), z3 = 0.5;
        addTriangle(x1, y1, z1, x2, y2, z2, x3, y3, z3);

        // Bottom Circle
        z1 = -0.5;
        z2 = -0.5;
        z3 = -0.5;
        addTriangle(x1, y1, z1, x3, y3, z3, x2, y2, z2);
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
}

// function makeSphere (slices, stacks) {
// }

////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

