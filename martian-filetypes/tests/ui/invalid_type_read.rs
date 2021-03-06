use failure::Error;
use martian_derive::martian_filetype;
use martian_filetypes::bin_file::BinaryFormat;
use martian_filetypes::json_file::JsonFormat;
use martian_filetypes::{FileStorage, FileTypeIO};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct Feature {
    id: usize,
}

#[derive(Debug, Serialize, Deserialize)]
struct Creature {
    id: usize,
}

martian_filetype! {FeatureFile, "feat"}
impl FileStorage<Feature> for FeatureFile {}

fn main() -> Result<(), Error> {
    let feature = Feature { id: 5 };
    let creature = Creature { id: 10 };
    // Json Format
    {
        let feat_file: JsonFormat<FeatureFile> = JsonFormat::from("feature");
        feat_file.write(&feature)?;
        let new_feature: Creature = feat_file.read()?; // Compiler error
        std::fs::remove_file(feat_file)?;
    }
    // Binary Format
    {
        let feat_file: BinaryFormat<FeatureFile> = BinaryFormat::from("feature");
        feat_file.write(&feature)?;
        let new_feature: Creature = feat_file.read()?; // Compiler error
        std::fs::remove_file(feat_file)?;
    }
    Ok(())
}
