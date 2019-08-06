import { LinkedList } from "./LinkedList";

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}
export class DirectedGraph {
  constructor(vertices) {
    this.nodes = {};
    this.vertices = vertices;
    this.adjacencyList = new Array(vertices);

    for (let i = 0; i < vertices; i++) {
      this.adjacencyList[i] = new LinkedList();
    }
  }

  addNode(key, value) {
    this.nodes[key] = value;
  }

  addEdge(source, destination, weight) {
    let edge = new Edge(source, destination, weight);
    this.adjacencyList[this.getNodeIndex(source)].add(edge);
  }

  getNodeIndex(key) {
    return this.nodes[key];
  }

  getRouteCost(route) {
    let vertexArray = route.split("-");
    let cost = 0;

    for (let i = 0; i < vertexArray.length - 1; i++) {
      let weight = this.getWeight(vertexArray[i], vertexArray[i + 1]);
      if (weight !== -1) {
        cost += weight;
      } else {
        return -1;
      }
    }

    return cost;
  }

  getWeight(source, destination) {
    let sourceIndex = this.getNodeIndex(source);

    let list = this.adjacencyList[sourceIndex];

    for (let i = 0; i < list.size; i++) {
      const obj = list.get(i);
      if (obj.destination === destination) {
        return Number.parseInt(obj.weight);
      }
    }

    return -1;
  }

  printAllPaths(s, d) {
    //add source to path[]
    // pathList.add;
    // let arr = [];
    // let list = this.adjacencyList[this.getNodeIndex(s)];
    // for (let i = 0; i < list.size; i++) {
    //   let isVisited = Array(this.vertices).fill(false);
    //   let pathList = new LinkedList();
    //   const node = list.get(i);
    //   pathList.add(node);
    //   if (node.destination === d) {
    //     arr.push(pathList);
    //   } else {
    //     //Call recursive utility
    //     const val = this.printAllPathsUtil(
    //       node.destination,
    //       d,
    //       isVisited,
    //       pathList,
    //       []
    //     );
    //     if (val) {
    //       arr.push(val);
    //     }
    //   }
    // }
    let isVisited = Array(this.vertices).fill(false);
    let pathList = [];

    let func = this.printAllPathsUtil()
    return func(s, d, isVisited, pathList);
    // return arr;
  }

  // A recursive function to print
  // all paths from 'u' to 'd'.
  // isVisited[] keeps track of
  // vertices in current path.
  // localPathList<> stores actual
  // vertices in the current path
  printAllPathsUtil() {
    let result = [];
    var self = this;
    return function rec(u, d, isVisited, localPathList){
      // Mark the current node
      isVisited[self.getNodeIndex(u)] = true;
      if(u === d){
        result.push([...localPathList]);
        isVisited[self.getNodeIndex(u)] = false;
        return result;
      }
      // get adjacency list of current node
      let list = self.adjacencyList[self.getNodeIndex(u)];

      // Recur for all the vertices
      // adjacent to current vertex
      for (let i = 0; i < list.size; i++) {
        let node = list.get(i);

        if (
          // node.destination !== d &&
          !isVisited[self.getNodeIndex(node.destination)]
        ) {
          localPathList.push(node);
          rec(node.destination, d, isVisited, localPathList);
          localPathList.splice(localPathList.length-1);
          // return localPathList;
        } 
        // else if (node.destination === d) {
        //   localPathList.add(node);
        //   // localPathList.remove()
        //   // result.push(localPathList);
        //   // isVisited[this.getNodeIndex(u)] = false;
        //   return;
        // }
      }

      // Mark the current node
      isVisited[self.getNodeIndex(u)] = false;
      return result;
    };
  }

  printGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let list = this.adjacencyList[i];
      for (let j = 0; j < list.size; j++) {
        console.log(
          "vertex-" +
            i +
            " is connected to " +
            list.get(j).destination +
            " with weight " +
            list.get(j).weight
        );
      }
    }
  }
}
