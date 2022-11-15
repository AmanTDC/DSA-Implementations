class UnionFind{
    constructor(nodes){
        this.nodes = nodes
        this.createBijection(nodes)
        this.parents = []
        this.components = {}
        for(let i in this.nodes){
            this.parents.push(i)
            this.components[i] = [i]
        }

    }
    createBijection(nodes){
        let nodeToIndex = {}
        for (let i=0;i<nodes.length;i++){
            nodeToIndex[nodes[i]] = i
        }
        this.nodeToIndex = nodeToIndex
    }
    replaceParent(parent1,parent2){
        for (let value of this.components[parent2]){
            this.components[parent1].push(value)
            this.parents[value] = parent1
        }
        delete this.components[parent2]
    }
    find(node){
        let index = this.nodeToIndex[node]
        let parent = this.parents[index]
        return this.nodes[parent]
    }
    union(u,v){
        let i = this.nodeToIndex[u]
        let j = this.nodeToIndex[v]

        if(this.parents[i]!=this.parents[j]){
            this.replaceParent(this.parents[i],this.parents[j]);
        }
        // console.log(this.components)

    }


}
module.exports = UnionFind