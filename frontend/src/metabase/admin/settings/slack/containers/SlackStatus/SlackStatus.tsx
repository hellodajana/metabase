import { connect } from "react-redux";
import SlackStatus from "../../components/SlackStatus";
import SlackStatusForm from "../../containers/SlackStatusForm";

const mapStateToProps = () => ({
  Form: SlackStatusForm,
  hasError: false,
});

const mapDispatchToProps = () => ({
  onDelete: () => undefined,
});

export default connect(mapStateToProps, mapDispatchToProps)(SlackStatus);
