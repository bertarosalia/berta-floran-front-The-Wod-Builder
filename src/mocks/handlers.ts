import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const exerciseId: string = "232464fe42536dd232";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}exercises`,
    async (req, res, ctx) => {
      const headerTestError = req.headers.get("IsTestError");

      if (headerTestError) {
        return res(
          ctx.status(500),
          ctx.json({
            error: "Something went wrong",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          exercises: [
            {
              name: "snatch",
              body: "arms",
              description: "great exercise",
              image: "url",
            },
            {
              name: "lungees",
              body: "legs",
              description: "legs die",
              image: "url",
            },
          ],
        })
      );
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}exercises/${exerciseId}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          exerciseDelete: {
            id: exerciseId,
          },
        })
      );
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}exercises/wrongId`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Exercise not found" }));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}exercises/${exerciseId}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          exercise: {
            body: "arms",
            name: "push press",
            description: "very great exercise",
            image: "url",
          },
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}exercises/wrongId`,
    (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Something went wrong" }));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}exercises/`,
    async (req, res, ctx) => {
      const headerTestError = req.headers.get("IsTestError");

      if (headerTestError) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Error creating song",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json({
          body: "arms",
          name: "push press",
          description: "very great exercise",
          image: "url",
        })
      );
    }
  ),

  rest.post(`${apiUrl}user/register`, async (req, res, ctx) => {
    const { name } = await req.json();
    const status = name === "" ? 400 : 201;
    return res(ctx.status(status));
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL}user/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.email || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          user: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBjMWViM2E4ZDdlMDg4YzU2NDU1YiIsInVzZXJOYW1lIjoidGVzdExvZ2luIiwiaWF0IjoxNjYyNDc2MTc5fQ.QthCeuT1iSEUp29Px9tayUBQEBUjzr08pdFkPozDsc0",
          },
        })
      );
    }
  ),
];
