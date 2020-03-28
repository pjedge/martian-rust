initSidebarItems({"enum":[["LevelFilter","An enum representing the available verbosity level filters of the logger."],["StageKind","Two different kinds of marian stages. `MainOnly` stages only have a `main()` function whereas `WithSplit` stages have `split()` and `join()` too."]],"fn":[["initialize",""],["make_timestamp",""],["make_timestamp_now",""],["martian_make_mro",""]],"macro":[["format_err","Constructs an `Error` using the standard string interpolation syntax."],["martian_stages","Create a stage and mro registry from a list of stage struct inputs."]],"mod":[["mro","This module defines objects that would help auto generate mro definitions for a stage and also defines the types that exist in the martian world"],["prelude","Re-export commonly used symbols in this crate"],["utils","Uncategorized collection of tiny useful functions"]],"struct":[["Error","The `Error` type, which can contain any failure."],["JobInfo",""],["MartianAdapter","Configure the Martian adapter for executing stage code"],["MartianRover","A struct that knows about the files directory associated with the martian run as well as the actual resources available for you."],["MartianVoid","A struct which needs to be used as one of the associated types in `MartianMain` or `MartianStage` if it is empty. For example, a stage with no chunk inputs, would set `type ChunkInputs = MartianVoid;`"],["Metadata","Tracking the metadata for one Martian chunk invocation"],["Resource","Memory and threads reservations for a stage."],["StageDef","All the chunks in the stage (with their inputs & resource) along with the join resource. This needs to be constructed in the `split()` function, so that martian can create chunks appropriately and set resource reservations for `main()` and `join()`"],["Version",""]],"trait":[["MartianFileType","A `MatianFiletype` is associated with a file of know non-empty extension. This encodes the concept of a `filepath` in martian."],["MartianMain","A stage in martian with just the main function."],["MartianMakePath","A trait satisfied by objects which can create a `file_name` in a `directory` with the correct extension if needed. `MartianFiletype`s implement this trait."],["MartianStage","A stage in martian which has `split`, `main` and `join`"],["RawMartianStage","A raw martian stage that works with untype metadata. It is recommended not to implement this directly. Use `MartianMain` or `MartianStage` traits instead"],["ResultExt","Extension methods for `Result`."]],"type":[["Json",""],["JsonDict",""]]});