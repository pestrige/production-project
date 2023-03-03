import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "features";
import { loginByUsername } from "features/AuthByUsername/model";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
	test("should set username", () => {
		const state: DeepPartial<LoginSchema> = { username: "admin" };

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin"))).toEqual({
			username: "admin",
			error: "",
		});
	});

	test("should set username and reset error", () => {
		const state: DeepPartial<LoginSchema> = { username: "admin", error: "error" };

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin"))).toEqual({
			username: "admin",
			error: "",
		});
	});

	test("should set password", () => {
		const state: DeepPartial<LoginSchema> = { password: "123" };

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("123"))).toEqual({
			password: "123",
			error: "",
		});
	});

	test("should set password and reset error", () => {
		const state: DeepPartial<LoginSchema> = { password: "123", error: "error" };

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("123"))).toEqual({
			password: "123",
			error: "",
		});
	});
});
