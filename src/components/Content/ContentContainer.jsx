import React from "react";
import { connect } from "react-redux";
import Content from "./Content";
import { getUserContent, getStatus, updateStatus } from "../../redux/content-reducer";
import { useMatch } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : "21985";
    this.props.getUserContent(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Content {...this.props}
        content={this.props.content} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}


// let AuthRedirectComponent = withAuthRedirect(ContentContainer);


let ContentURLMatch = (props) => {
  let match = useMatch("/profile/:userId/");

  return <ContentContainer {...props} match={match} />;
};


let mapStateToProps = (state) => {
  return {
    content: state.contentPage.content,
    status: state.contentPage.status
  };
};

export default connect(mapStateToProps, { getUserContent, getStatus, updateStatus })(ContentURLMatch);
