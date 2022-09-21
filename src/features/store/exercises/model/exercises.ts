export interface IExercise {
  body: string;
  name: string;
  description: string;
  image: string;
  id?: string;
}

export interface ExerciseFromDB extends IExercise {
  id: string;
}
