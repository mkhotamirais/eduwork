import Button from "../../components/Button";
import Checkbox from "../../components/form/Checkbox";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Radio from "../../components/form/Radio";
import Textarea from "../../components/form/Textarea";

const FormValidationFunction = () => {
  return (
    <form action="">
      <div className="mb-3">
        <Label hf="labelku">Label</Label>
        <Input type="text" id="inputku" />
      </div>
      <div className="mb-3">
        <Label hf="textareaku">Textarea</Label>
        <Textarea id="textareaku" />
      </div>
      <div className="mb-3">
        <Label hf="radioku">Radio</Label>
        <Radio id="laki-laki" name="gender">
          Laki-laki
        </Radio>
        <Radio id="perempuan" name="gender">
          Perempuan
        </Radio>
      </div>
      <div className="mb-3">
        <Label hf="checkboxku">Checkbox</Label>
        <Checkbox hf="checkboxku">Pilih</Checkbox>
      </div>
      <Button className={"bg-blue-600 text-white hover:bg-blue-500"}>
        Submit
      </Button>
    </form>
  );
};

export default FormValidationFunction;
