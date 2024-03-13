import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import styles from "./writeblog.module.css";
function WriteBlog() {
  return (
    <Form>
      <Input title="Title" type="text" name="title" placeholder="Title" />
      <textarea name="content" id="content" cols="30" rows="10"></textarea>
      <Button>Publish your thaughts</Button>
    </Form>
  )
}

export default WriteBlog
