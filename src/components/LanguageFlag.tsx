import * as React from "react";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import Select, { SelectOption } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";
import FlagDE from "../assets/FlagDE.png";
import FlagEN from "../assets/FlagEN.png";
import FlagPT from "../assets/FlagPT.png";
import FlafPTIcon from "../icons/FlagPT";
import Avatar from "@mui/material/Avatar";

const languages = [
  { value: "pt", label: "PT", src: FlagPT },
  { value: "en", label: "EN", src: FlagEN },
  { value: "de", label: "DE", src: FlagDE },
];

function renderValue(option: SelectOption<string> | null) {
  if (!option) {
    return null;
  }

  return (
    <React.Fragment>
      <ListItemDecorator>
        <Avatar
          src={languages.find((o) => o.value === option.value)?.src}
          sx={{ width: "2rem", height: "2rem", objectFit: "cover" }}
          variant="rounded"
        />
      </ListItemDecorator>
      {option.label}
    </React.Fragment>
  );
}

export default function LanguageFlag() {
  const { i18n } = useTranslation();

  const changeLanguage = (option: any) => {
    i18n.changeLanguage(option);
  };

  return (
    <div className="btn-container">
      <Select
        size="sm"
        defaultValue={`${FlagPT}`}
        placeholder={<FlafPTIcon />}
        slotProps={{
          listbox: {
            sx: {
              "--ListItemDecorator-size": "2rem",
              /* backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: "transparent",
              }, */
            },
          },
          button: {
            sx: {
              "--MuiSelect-button": {
                placeholderOpacity: "1",
                paddingInline: 20,
              },
            },
          },
        }}
        sx={{
          backgroundColor: "transparent",
          border: "none",
          "::placeholder": {
            opacity: "1!important",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          ".MuiSelect-indicator": {
            display: "none",
          },
        }}
        renderValue={renderValue}
      >
        {languages.map((option, index) => (
          <React.Fragment key={option.value}>
            {index !== 0 ? (
              <ListDivider role="none" inset="startContent" />
            ) : null}
            <Option
              value={option.value}
              onClick={() => {
                changeLanguage(option.value);
              }}
/*               sx={{
                backgroundColor: "trasparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }} */
            >
              <ListItemDecorator sx={{ margin: "0 auto" }}>
                <Avatar
                  src={option.src}
                  srcSet={option.src}
                  alt="option.label"
                  className="language-flag"
                  slotProps={{
                    img: {
                      sx: {
                        margin: "0 auto",
                      },
                    },
                  }}
                  sx={{
                    width: "2rem",
                    height: "auto",
                    /* backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    }, */
                  }}
                  variant="rounded"
                />
              </ListItemDecorator>
            </Option>
          </React.Fragment>
        ))}
      </Select>
    </div>
  );
}
