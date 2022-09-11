import React, { SyntheticEvent, useState } from "react";
import useExercises from "../../hooks/useExercises";
import Button from "../Button/Button";
import CreateExerciseFormStyle from "./CreateExerciseFormStyle";

const CreateExerciseForm = (): JSX.Element => {
  const initialState = {
    name: "",
    body: "",
    description: "",
    image: "",
    id: "",
  };

  const { createExercise } = useExercises();

  const [newExercise, setFormData] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...newExercise, [event.target.id]: event.target.value });
  };

  const createNewExercise = async (event: SyntheticEvent) => {
    event.preventDefault();
    await createExercise(newExercise);
    setFormData(initialState);
  };

  return (
    <>
      <CreateExerciseFormStyle>
        <div className="create-form__container">
          <h1 className="create-form__title">Let´s train!</h1>
          <form onSubmit={createNewExercise}>
            <div className="create-form__label--container">
              <label htmlFor="name" className="create-form__label">
                Name
              </label>
              <input
                className="create-form__input"
                type="text"
                id="name"
                required
                autoComplete="off"
                value={newExercise.name}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="body" className="create-form__label">
                Body
              </label>
              <input
                className="create-form__input"
                type="text"
                id="body"
                required
                autoComplete="off"
                value={newExercise.body}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="description" className="create-form__label">
                Description
              </label>
              <input
                className="create-form__input"
                type="text"
                id="description"
                minLength={20}
                required
                autoComplete="off"
                value={newExercise.description}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="exerciseimage" className="create-form__label">
                Image
              </label>
              <input
                className="create-form__input"
                type="url"
                id="exerciseimage"
                placeholder="url image"
                autoComplete="off"
                value={newExercise.image}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__button">
              <Button
                classNameButton="create-exercise__button"
                type="submit"
                buttonText="CREATE"
              />
            </div>
          </form>
        </div>
      </CreateExerciseFormStyle>
    </>
  );
};

export default CreateExerciseForm;
