// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import blockContentResources from "./blockContentResources";
import project from "./project";
import chemical from "./chemical";
import methodology from "./methodology";
import researcher from "./researcher";
import topic from "./topic";
import location from "./location";
import country from "./country";
import internalResource from "./internalResource";
import externalResource from "./externalResource";
import resourceCategory from "./resourceCategory";
import specialProject1 from "./specialProject1";
import publication from "./publication";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project,
    publication,
    chemical,
    methodology,
    researcher,
    topic,
    location,
    country,
    internalResource,
    externalResource,
    resourceCategory,
    specialProject1,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    blockContentResources,
  ]),
});
