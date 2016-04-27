
var Intersection = require('./CCIntersection');

function Contact (collider1, collider2) {
    this.collider1 = collider1;
    this.collider2 = collider2;

    this.touching = false;

    var isCollider1Polygon = (collider1 instanceof cc.BoxCollider) || (collider1 instanceof cc.PolygonCollider);
    var isCollider2Polygon = (collider2 instanceof cc.BoxCollider) || (collider2 instanceof cc.PolygonCollider);
    var isCollider1Circle = collider1 instanceof cc.CircleCollider;
    var isCollider2Circle = collider2 instanceof cc.CircleCollider;

    if (isCollider1Polygon && isCollider2Polygon) {
        this.testFunc = Intersection.polygonPolygon;
    }
    else if (isCollider1Circle && isCollider2Circle) {
        this.testFunc = Intersection.circleCircle;
    }
    else if (isCollider1Polygon && isCollider2Circle) {
        this.testFunc = Intersection.polygonCircle;
    }
    else if (isCollider1Circle && isCollider2Polygon) {
        this.testFunc = Intersection.polygonCircle;
        this.collider1 = collider2;
        this.collider2 = collider1;
    }
    else {
        cc.error('Can\'t find testFunc for (%s, $s).', cc.js.getClassByName(collider1), cc.js.getClassByName(collider2));
    }
}

Contact.prototype.test = function () {
    var world1 = this.collider1.world;
    var world2 = this.collider2.world;

    if (!world1.aabb.intersects(world2.aabb)) {
        return false;
    }

    if (this.testFunc === Intersection.polygonPolygon) {
        return this.testFunc(world1.points, world2.points);
    }
    else if (this.testFunc === Intersection.circleCircle) {
        return this.testFunc(world1, world2);
    }
    else if (this.testFunc === Intersection.polygonCircle) {
        return this.testFunc(world1.points, world2);
    }

    return false;
};

Contact.prototype.collider = function () {
    var result = this.test();

    var type = '';
    if (result && !this.touching) {
        this.touching = true;
        type = 'CollisionEnter';
    }
    else if (result && this.touching) {
        type = 'CollisionStay';
    }
    else if (!result && this.touching) {
        this.touching = false;
        type = 'CollisionExit';
    }

    return type;
};

module.exports = Contact;
