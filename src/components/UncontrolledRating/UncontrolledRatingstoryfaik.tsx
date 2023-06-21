import React, {useState} from "react";
import {UnControlledRating} from "../UncontrolledRating/UnControlledRating";
import {RatingValueType} from "../Rating/Rating";

export const EmptyUnControlledRating= () => <UnControlledRating defaultValue={0} setValue={()=>{}} />
export const UnControlledRating1 = () => <UnControlledRating defaultValue={1} setValue={()=>{}} />
export const UnControlledRating2 = () => <UnControlledRating defaultValue={2} setValue={()=>{}} />
export const UnControlledRating3 = () => <UnControlledRating defaultValue={3} setValue={()=>{}} />
export const UnControlledRating4 = () => <UnControlledRating defaultValue={4} setValue={()=>{}} />
export const UnControlledRating5 = () => <UnControlledRating defaultValue={5} setValue={()=>{}} />
