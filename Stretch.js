class Stretch
{
    constructor(bodyA, pointB)
    {
        var Property = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .04,
            length: 2
        }

        this.stretch = Matter.Constraint.create(Property)
        this.pointB = pointB
        World.add(world, this.stretch)
        
    }

    fly()
    {
        this.stretch.bodyA = null
    }

    attach(body)
    {
        this.stretch.bodyA = body
    }

    display()
    {
        if(this.stretch.bodyA)
        {
            push()
                stroke('white')
                strokeWeight(3)
                line(this.stretch.bodyA.position.x,this.stretch.bodyA.position.y,this.pointB.x,this.pointB.y)
            pop()
        } 
    }
}