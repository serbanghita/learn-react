import * as React from "react";

// Tree node interfaces.
interface ITreeNode {
  title: string;
  url: string;
  children?: ITreeNode[];
}

interface ITreeNodeState extends ITreeNode {
  expanded?: boolean;
}

interface ITreeNodeProps {
  dataModel: ITreeNodeState;
}

// Tree root interfaces.
interface ITreeProps {

}

interface ITreeState {
  query: string;
  dataModel: ITreeNodeState[];
}

export default class Tree extends React.Component<ITreeProps, ITreeState> {

  public constructor(props) {
    super(props);
    this.state = { query: "", dataModel: [] };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  public componentWillMount() {
    fetch("/treeDataModel.json")
      .then((response) => response.json())
      .then((result: ITreeNode[]) => {
        this.setState({ dataModel: result });
      });
  }

  private onSearchHandler(e) {
    const query = e.target.value.replace(/[^a-z]+/ig, ".*");
    this.setState({query});
  }

  public render() {

    const query = this.state.query;
    let nodes: ITreeNode[] = this.state.dataModel;

    const cloneNode = (node: ITreeNodeState): ITreeNodeState => {
      return Object.assign({}, node, { children: node.children ? node.children.map(cloneNode) : []});
    };

    if (query.length > 3) {

      const cloned = this.state.dataModel.map(cloneNode);

      nodes = cloned.filter(function filterNodes(node: ITreeNodeState) {

        if (node.children && node.children.length > 0) {
          node.children = node.children.filter(filterNodes);
        }

        const result = (
          node.title.match(new RegExp(query, "i")) !== null ||
          (node.children && node.children.length > 0)
        );

        return result;
      });
    }

    const treeNodes = nodes.map((treeNode: ITreeNodeState, index: number) => {
      return <TreeNode key={index} dataModel={treeNode} />;
    });

    return (
      <fieldset className="tree">
        <legend>Tree</legend>
        <TreeSearch onChange={this.onSearchHandler} />
        {treeNodes.length > 0 ? treeNodes : "Loading ..."}
      </fieldset>
    );
  }

}

class TreeNode extends React.Component<ITreeNodeProps, ITreeNodeState> {

  private renderChildren() {
    const dataModel = this.props.dataModel;

    if (dataModel.children && dataModel.children.length > 0) {
      return dataModel.children.map((treeNode: ITreeNode) => {
        return (
          <div className="tree-children" key={treeNode.url}>
            <TreeNode dataModel={treeNode}/>
          </div>
        );
      });
    }
  }

  public render() {
    const children = this.renderChildren();

    return (
      <div>
        {this.props.dataModel.title}
        {children}
      </div>
    );
  }

}

interface ITreeSearchProps {
  onChange: (e) => void;
}

class TreeSearch extends React.Component<ITreeSearchProps, {}> {

  private readonly onChange: (e) => void;

  constructor(props) {
    super(props);
    this.onChange = this.props.onChange.bind(this);
  }

  public render() {
    return (
      <div className="tree-search">
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }

}
